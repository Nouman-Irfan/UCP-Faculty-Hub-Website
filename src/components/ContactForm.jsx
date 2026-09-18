import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setStatus('sending')

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY
      }
    )
    .then(() => {
      setStatus('success')
      form.current.reset()
    })
    .catch((error) => {
      console.log(error)
      setStatus('error')
    })
  }


  let statusMessage = ''
  let statusStyle = ''

  if (status === 'success') {
    statusMessage = '✓ Message sent successfully!'
    statusStyle = 'text-green-600'
  }

  if (status === 'error') {
    statusMessage = 'Message could not be sent. Please try again.'
    statusStyle = 'text-red-600'
  }


  return (
    <section className="border-t border-slate-200 bg-slate-50">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="grid lg:grid-cols-5">


            <div className="relative overflow-hidden bg-blue-700 p-8 text-white lg:col-span-2 lg:p-10">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-35 border-white/5"></div>

              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-35 border-white/5"></div>


              <div className="relative">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                  ✉
                </div>


                <p className="text-sm font-semibold tracking-widest text-blue-200">
                  GET IN TOUCH
                </p>


                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Have a Question
                  <span className="block">
                    or Suggestion?
                  </span>
                </h2>


                <p className="mt-5 leading-7 text-blue-100">
                  We'd be happy to hear your feedback, questions or suggestions
                  about UCP Faculty Hub.
                </p>


                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      ?
                    </div>

                    <div>
                      <p className="font-semibold">
                        Questions
                      </p>

                      <p className="text-sm text-blue-200">
                        Ask about the platform
                      </p>
                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      ✦
                    </div>

                    <div>
                      <p className="font-semibold">
                        Suggestions
                      </p>

                      <p className="text-sm text-blue-200">
                        Help us improve the project
                      </p>
                    </div>

                  </div>


                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      ✓
                    </div>

                    <div>
                      <p className="font-semibold">
                        Feedback
                      </p>

                      <p className="text-sm text-blue-200">
                        Share your experience
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="p-8 lg:col-span-3 lg:p-10">

              <div className="mb-8">

                <p className="text-sm font-semibold text-blue-700">
                  SEND A MESSAGE
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  We'd like to hear from you
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the form below and send your message.
                </p>

              </div>


              <form
                ref={form}
                onSubmit={sendEmail}
              >

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />

                  </div>

                </div>


                <div className="mt-5">

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />

                </div>


                <div className="mt-5">

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  ></textarea>

                </div>


                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-blue-400"
                >

                  {status === 'sending' ? 'Sending...' : 'Send Message'}

                  {status !== 'sending' && (
                    <span>→</span>
                  )}

                </button>


                {statusMessage && (
                  <p className={`mt-4 text-sm font-medium ${statusStyle}`}>
                    {statusMessage}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactForm