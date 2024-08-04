'use client'
import { SimpleLayout } from '@/components/SimpleLayout'
import { EnvelopeIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <SimpleLayout
      title="Contact Me"
      intro="Drop me a line if you want to collaborate on a project, or just want to chat. I’m always happy to hear from you."
    >
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative sm:pb-32">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <dl className="body-text">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Schedule A call with me</span>
                    <VideoCameraIcon className="h-7 w-6" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a
                      href="https://cal.com/nova-saint"
                      className="hover:text-teal-400"
                    >
                      Schedule a meeting with me
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-teal-400"
                      href="mailto:hello@novasaint.com"
                    >
                      hello@novasaint.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
