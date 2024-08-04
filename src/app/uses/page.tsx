import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Tools I use and gadgets I love.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I use and gadgets I love."
      intro="The things I use to build software, stay productive, or make my life easier while traveling. Here’s a small list of some of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M2 Max, 32GB RAM (2023)">
            Absolutely love this machine! It’s small enough to fit in my
            backpack while I’m traveling.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            VS Code reminds me of Visual Studio 6.0, which I used to use back in
            the day. Great community extensions and a lot of features (they do
            make it a bit slow though).
          </Tool>
          <Tool title="iTerm2">
            I’ve used iTerm2 for years and it’s still the best terminal.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Cal.com">
            Just like Calendly but with a better design and open sourced.
          </Tool>
          <Tool title="Pomodoro Timer">
            A simple tool for a balance work day.
          </Tool>
          <Tool title="Alfred">
            I use Alfred for everything. It’s the first thing I install on a new
            Mac.
          </Tool>
          <Tool title="Notion">
            Don’t need to say much about Notion. It’s a great note-taking app.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Traveling">
          <Tool title="Bose QuietComfort Headphones">
            It is essential to have a noise canceling headphones on flights or a
            cafe to work. An absolute game changer.
          </Tool>
          <Tool title="Express VPN">
            VPN is a must when traveling. I have been using Express VPN for
            years and it has been great.
          </Tool>
          <Tool title="Safety Wing">
            A new kind of travel insurance for people who don’t have a set
            itinerary and want to be covered for a long time.
          </Tool>
          <Tool title="Tortuga Backpack">
            You do not want to drag a suitcase around when traveling. Especially
            on the cobblestone streets. A backpack is the way to go.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
