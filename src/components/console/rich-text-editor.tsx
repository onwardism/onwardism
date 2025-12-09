'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { Bold, Italic, Underline as UnderlineIcon, Strikethrough, Code, List, ListOrdered, Quote, Undo, Redo, Link as LinkIcon, Image as ImageIcon, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

export function RichTextEditor({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'mb-4',
          },
        },
        hardBreak: {
          keepMarks: true,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm dark:prose-invert max-w-none focus:outline-none',
      },
      transformPastedText(text) {
        // Auto-format markdown-style syntax
        let formatted = text
        
        // Convert markdown headings to HTML
        formatted = formatted.replace(/^### (.+)$/gm, '<h3>$1</h3>')
        formatted = formatted.replace(/^## (.+)$/gm, '<h2>$1</h2>')
        formatted = formatted.replace(/^# (.+)$/gm, '<h2>$1</h2>')
        
        // Convert markdown lists to HTML
        // Bullet lists (-, *, +)
        formatted = formatted.replace(/^[\-\*\+] (.+)$/gm, '<ul><li>$1</li></ul>')
        // Numbered lists
        formatted = formatted.replace(/^\d+\. (.+)$/gm, '<ol><li>$1</li></ol>')
        
        // Merge consecutive list items
        formatted = formatted.replace(/<\/ul>\n<ul>/g, '')
        formatted = formatted.replace(/<\/ol>\n<ol>/g, '')
        
        // Convert markdown bold/italic
        formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>')
        formatted = formatted.replace(/__(.+?)__/g, '<strong>$1</strong>')
        formatted = formatted.replace(/_(.+?)_/g, '<em>$1</em>')
        
        // Convert markdown links [text](url)
        formatted = formatted.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
        
        // Convert markdown code
        formatted = formatted.replace(/`(.+?)`/g, '<code>$1</code>')
        
        // Convert blockquotes
        formatted = formatted.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        
        // Convert double line breaks to paragraphs
        formatted = formatted.replace(/\n\n/g, '</p><p>')
        // Convert single line breaks to <br>
        formatted = formatted.replace(/\n/g, '<br>')
        
        return formatted
      },
      transformPastedHTML(html) {
        // Preserve line breaks in HTML
        return html
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>')
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return <div className="w-full h-[400px] border rounded-lg bg-muted animate-pulse" />
  }

  const addLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL:')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/50">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('bold') ? 'bg-muted' : ''}`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('italic') ? 'bg-muted' : ''}`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('underline') ? 'bg-muted' : ''}`}
          title="Underline"
        >
          <UnderlineIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('strike') ? 'bg-muted' : ''}`}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('code') ? 'bg-muted' : ''}`}
          title="Code"
        >
          <Code className="w-4 h-4" />
        </button>

        <div className="w-px h-8 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-2 rounded hover:bg-muted transition-colors text-sm font-semibold ${editor.isActive('heading', { level: 2 }) ? 'bg-muted' : ''}`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-2 rounded hover:bg-muted transition-colors text-sm font-semibold ${editor.isActive('heading', { level: 3 }) ? 'bg-muted' : ''}`}
          title="Heading 3"
        >
          H3
        </button>

        <div className="w-px h-8 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('bulletList') ? 'bg-muted' : ''}`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('orderedList') ? 'bg-muted' : ''}`}
          title="Ordered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('blockquote') ? 'bg-muted' : ''}`}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <div className="w-px h-8 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-muted' : ''}`}
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-muted' : ''}`}
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-muted' : ''}`}
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </button>

        <div className="w-px h-8 bg-border mx-1" />

        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded hover:bg-muted transition-colors ${editor.isActive('link') ? 'bg-muted' : ''}`}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-muted transition-colors"
          title="Add Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        <div className="w-px h-8 bg-border mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-muted transition-colors disabled:opacity-50"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent 
        editor={editor} 
        className="p-4 min-h-[400px]"
      />
    </div>
  )
}
