"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CopyIcon, ExternalLinkIcon, MessageSquare } from "lucide-react"
import { SocialIcon } from "react-social-icons"
import { FaSignalMessenger } from "react-icons/fa6"
import { toast } from "sonner"

interface ContactInfo {
  platform: string
  id: string
  link: string
  network?: string
  description?: string
  bgColor?: string
  fgColor?: string
  customIcon?: React.ReactNode
}

const contacts: ContactInfo[] = [
  {
    platform: "Line",
    id: "0158yu",
    link: "https://line.me/ti/p/xyqxhXBs5H",
    network: "line.me",
    description: "Line 是我常用的通訊軟體，歡迎加我好友！",
    bgColor: "#00B900",
    fgColor: "#FFFFFF"
  },
  {
    platform: "WhatsApp",
    id: "+886 906-781-585",
    link: "https://wa.me/886906781585",
    network: "whatsapp",
    description: "國際通訊首選，特別是和國外朋友聯絡時",
    bgColor: "#25D366",
    fgColor: "#FFFFFF"
  },
  {
    platform: "iMessage",
    id: "+886 906-781-585",
    link: "sms:+886906781585",
    description: "如果您使用 Apple 裝置，可以直接用 iMessage 聯絡我",
    bgColor: "#37AEE2",
    fgColor: "#FFFFFF",
    customIcon: <MessageSquare className="w-full h-full p-1.5 text-white dark:text-stone-100" />
  },
  {
    platform: "Telegram",
    id: "@yctc815",
    link: "https://t.me/yctc815",
    network: "telegram",
    description: "加密通訊的好選擇，也常用於工作交流",
    bgColor: "#0088cc",
    fgColor: "#FFFFFF"
  },
  {
    platform: "Signal",
    id: "+886 906-781-585",
    link: "https://signal.me/#eu/MQRyrLfHFq81g3xh1HzWt3dHwrrphvWQLeGykQVl9UNNK6Hf2iVDnYJtRxtIScoj",
    description: "重視隱私時的首選通訊軟體",
    bgColor: "#3A76F0",
    fgColor: "#FFFFFF",
    customIcon: <FaSignalMessenger className="w-full h-full p-1.5 text-white dark:text-stone-100" />
  },
  {
    platform: "Discord",
    id: "@yc815",
    link: "https://discordapp.com/users/843219121122181140",
    network: "discord",
    description: "遊戲和社群交流平台，我也會用於工作討論。",
    bgColor: "#5865F2",
    fgColor: "#FFFFFF"
  }
]

export function ContactCard() {
  const copyToClipboard = (id: string, platform: string) => {
    navigator.clipboard.writeText(id)
    toast.success(`已複製 ${platform} ID`, {
      description: id,
    })
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/avatar.jpg" alt="Yushun Chen" />
              <AvatarFallback>YC</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="hidden sm:block">Yushun&apos;s Contact Info</CardTitle>
              <CardDescription className="hidden sm:block">選擇您喜歡的方式與我聯絡</CardDescription>
            </div>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 shrink-0"
            onClick={() => window.open('https://yushun.chen.zone', '_blank')}
          >
            <ExternalLinkIcon className="h-4 w-4" />
            <span>個人網頁</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-2 sm:p-4">
        {contacts.map((contact, index) => (
          <div key={contact.platform}>
            {index > 0 && <Separator className="my-2" />}
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 group flex-wrap">
                  <div className={`h-8 w-8 overflow-hidden rounded-md ${contact.bgColor ? `bg-[${contact.bgColor}]` : ''} ml-2 sm:ml-4 transition-colors duration-200`}>
                    {contact.customIcon ? (
                      contact.customIcon
                    ) : (
                      <SocialIcon
                        network={contact.network}
                        style={{ height: 32, width: 32 }}
                        className="!h-full !w-full transition-colors duration-200"
                        bgColor={contact.bgColor}
                        fgColor={contact.fgColor}
                        target="_blank"
                      />
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="flex-1 min-w-0 justify-start group-hover:border-primary dark:border-stone-700 dark:hover:border-stone-600"
                    onClick={() => window.open(contact.link, '_blank')}
                  >
                    <span className="mr-2 font-medium">{contact.platform}:</span>
                    <span className="text-muted-foreground truncate text-xs sm:text-sm">{contact.id}</span>
                    <ExternalLinkIcon className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-stone-500 dark:text-stone-400" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 hover:bg-stone-100 dark:hover:bg-stone-800"
                    onClick={() => copyToClipboard(contact.id, contact.platform)}
                  >
                    <CopyIcon className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                  </Button>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className={`h-10 w-10 overflow-hidden rounded-md ${contact.bgColor ? `bg-[${contact.bgColor}]` : ''} transition-colors duration-200`}>
                    {contact.customIcon ? (
                      contact.customIcon
                    ) : (
                      <SocialIcon
                        network={contact.network}
                        style={{ height: 40, width: 40 }}
                        className="!h-full !w-full transition-colors duration-200"
                        bgColor={contact.bgColor}
                        fgColor={contact.fgColor}
                        target="_blank"
                      />
                    )}
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-semibold">{contact.platform}</h4>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 