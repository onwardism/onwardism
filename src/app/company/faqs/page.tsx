import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What is Onwardism?",
    answer:
      "Onwardism is a comprehensive online news media platform dedicated to technology and engineering professionals. We provide in-depth coverage of the latest developments in Artificial Intelligence, Data Science, Cloud Computing, Software Development, and Cybersecurity. Our mission is to deliver accurate, timely, and insightful content that helps professionals stay ahead in the rapidly evolving tech landscape. Whether you're a developer, data scientist, security expert, or tech enthusiast, Onwardism offers curated news, analysis, and resources tailored to your interests.",
  },
  {
    question: "How often is content updated?",
    answer:
      "We publish new content multiple times daily to ensure you never miss important tech news. Our editorial team works around the clock to bring you breaking news, in-depth articles, research papers, and event coverage. You can expect fresh content in the morning, afternoon, and evening, covering different time zones and global tech events. We also provide real-time updates for major announcements and breaking stories in the technology sector.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "Onwardism offers both free and premium subscription tiers. Our free tier provides access to daily news articles, blog posts, and basic features. Premium subscribers enjoy unlimited access to all content, including exclusive research papers, in-depth analysis, early access to articles, ad-free browsing, and personalized news feeds. We also offer special rates for students, educators, and enterprise teams. Detailed pricing information will be available soon on our website.",
  },
  {
    question: "How can I contribute content?",
    answer:
      "We actively welcome contributions from industry experts, researchers, and technology professionals. If you have insights, research findings, or expertise to share, you can submit your content through our contributor portal. We accept various formats including articles, research papers, case studies, and technical tutorials. Our editorial team reviews all submissions to ensure quality and relevance. Contributors receive proper attribution, and selected pieces may be featured prominently on our platform. For more information about our contribution guidelines and submission process, please contact our editorial team at editorial@onwardism.com.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Our support team is available to assist you through multiple channels. You can reach us via email at support@onwardism.com for general inquiries, or visit our dedicated Support page for comprehensive help resources. We offer live chat support during business hours (Monday-Friday, 9 AM - 5 PM EST), and our help center features detailed guides, tutorials, and troubleshooting articles. For urgent technical issues, premium subscribers have access to priority support with faster response times. We typically respond to all inquiries within 24 hours.",
  },
  {
    question: "Can I customize my news feed?",
    answer:
      "Absolutely! Onwardism offers powerful personalization features to tailor your news experience. Once you create an account, you can select your preferred topics from our five main categories: AI, Data, Cloud, Development, and Security. You can also follow specific tags, save articles for later reading, and set up custom alerts for topics that matter most to you. Our intelligent recommendation system learns from your reading habits to suggest relevant content. Premium subscribers can create multiple custom feeds and receive personalized daily digests via email.",
  },
  {
    question: "Do you offer a mobile app?",
    answer:
      "Yes, we're actively developing native mobile applications for both iOS and Android platforms. Our mobile apps will feature offline reading, push notifications for breaking news, dark mode support, and seamless synchronization with your web account. Beta testing is currently underway, and we expect to launch the apps in early 2026. You can sign up for our beta program to get early access and help shape the mobile experience. In the meantime, our website is fully responsive and optimized for mobile browsers, providing an excellent reading experience on all devices.",
  },
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Onwardism
          </p>
        </section>

        <section className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
