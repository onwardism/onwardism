'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Bot, User, Paperclip, X, FileText, Image as ImageIcon } from 'lucide-react'

interface AttachedFile {
  id: string
  file: File
  type: 'image' | 'document'
  preview?: string
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  attachments?: AttachedFile[]
}

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        })
      }
    }

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(scrollToBottom, 100)
    return () => clearTimeout(timeoutId)
  }, [messages, isLoading])

  const generateBotResponse = (userMessage: string, attachments?: AttachedFile[]): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Handle attachments
    if (attachments && attachments.length > 0) {
      const imageCount = attachments.filter(f => f.type === 'image').length
      const docCount = attachments.filter(f => f.type === 'document').length
      
      let attachmentResponse = "I can see you've shared "
      if (imageCount > 0) {
        attachmentResponse += `${imageCount} image${imageCount > 1 ? 's' : ''}`
      }
      if (docCount > 0) {
        if (imageCount > 0) attachmentResponse += " and "
        attachmentResponse += `${docCount} document${docCount > 1 ? 's' : ''}`
      }
      attachmentResponse += " with me. "
      
      if (imageCount > 0) {
        attachmentResponse += "I can help analyze images for technical diagrams, architecture designs, or code screenshots. "
      }
      if (docCount > 0) {
        attachmentResponse += "I can assist with document analysis and technical content review. "
      }
      
      return attachmentResponse + "What specific questions do you have about these files?"
    }
    
    if (lowerMessage.includes('cloud')) {
      return "Cloud computing is transforming how businesses operate. Key trends include multi-cloud strategies, serverless computing, and edge computing. What specific aspect of cloud technology interests you?"
    } else if (lowerMessage.includes('data')) {
      return "Data engineering and analytics are crucial for modern businesses. Popular tools include Apache Spark, Kafka, and modern data warehouses like Snowflake. Are you working on any specific data challenges?"
    } else if (lowerMessage.includes('security') || lowerMessage.includes('cyber')) {
      return "Cybersecurity is more important than ever. Key areas include zero-trust architecture, identity management, and threat detection. What security topics would you like to explore?"
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "AI and machine learning are revolutionizing industries. From LLMs to computer vision, the possibilities are endless. What AI applications are you most interested in?"
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you with questions about cloud computing, data engineering, cybersecurity, and AI. You can also share files and images for analysis. What would you like to know?"
    } else {
      return "That's an interesting question! I specialize in cloud computing, data engineering, cybersecurity, and AI topics. You can also share files or images for technical analysis. Could you tell me more about what specific aspect you'd like to explore?"
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const fileType = file.type.startsWith('image/') ? 'image' : 'document'
      const newFile: AttachedFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        file,
        type: fileType
      }

      // Create preview for images
      if (fileType === 'image') {
        const reader = new FileReader()
        reader.onload = (e) => {
          newFile.preview = e.target?.result as string
          setAttachedFiles(prev => [...prev, newFile])
        }
        reader.readAsDataURL(file)
      } else {
        setAttachedFiles(prev => [...prev, newFile])
      }
    })

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeAttachedFile = (fileId: string) => {
    setAttachedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() && attachedFiles.length === 0) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue || (attachedFiles.length > 0 ? 'Shared files' : ''),
      sender: 'user',
      timestamp: new Date(),
      attachments: attachedFiles.length > 0 ? [...attachedFiles] : undefined
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    const currentAttachments = [...attachedFiles]
    setAttachedFiles([])
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue, currentAttachments),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8 min-h-[calc(100vh-200px)] flex flex-col">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Chat History */}
        {messages.length > 0 && (
          <div 
            ref={chatContainerRef}
            className="flex-1 mb-6 space-y-4 overflow-y-auto max-h-[60vh] pr-2 scrollbar-hide"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* Internet Explorer 10+ */
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    
                    {/* Display attachments */}
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.attachments.map((attachment) => (
                          <div key={attachment.id} className="flex items-center gap-2 p-2 rounded bg-black/10 dark:bg-white/10">
                            {attachment.type === 'image' ? (
                              <>
                                <ImageIcon className="h-4 w-4 flex-shrink-0" />
                                {attachment.preview && (
                                  <img 
                                    src={attachment.preview} 
                                    alt={attachment.file.name}
                                    className="w-16 h-16 object-cover rounded"
                                  />
                                )}
                              </>
                            ) : (
                              <FileText className="h-4 w-4 flex-shrink-0" />
                            )}
                            <span className="text-xs truncate">{attachment.file.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 px-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary flex-shrink-0 order-2">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className={`${messages.length === 0 ? 'flex-1 flex items-center justify-center' : ''}`}>
          <div className="w-full max-w-2xl mx-auto">
            {/* Attached Files Preview */}
            {attachedFiles.length > 0 && (
              <div className="mb-3 p-3 border rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Paperclip className="h-4 w-4" />
                  <span className="text-sm font-medium">Attached Files ({attachedFiles.length})</span>
                </div>
                <div className="space-y-2">
                  {attachedFiles.map((file) => (
                    <div key={file.id} className="flex items-center gap-2 p-2 bg-background rounded border">
                      {file.type === 'image' ? (
                        <>
                          <ImageIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          {file.preview && (
                            <img 
                              src={file.preview} 
                              alt={file.file.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                          )}
                        </>
                      ) : (
                        <FileText className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate flex-1">{file.file.name}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAttachedFile(file.id)}
                        className="h-6 w-6 p-0 hover:bg-destructive/10"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx,.txt,.md"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              {/* Attach button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handleAttachClick}
                disabled={isLoading}
                className="flex-shrink-0"
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach files</span>
              </Button>
              
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about tech or share files..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                className="px-4 flex-shrink-0"
                disabled={isLoading || (!inputValue.trim() && attachedFiles.length === 0)}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}