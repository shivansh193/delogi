'use client'

const ContactInfo = () => {
  return (
    <div className="bg-purple-100">
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Shivansh Kalra</h2>
            <ul className="list-disc ml-6">
              <li>Email: shivansh@example.com</li>
              <li>Github: <a href="https://github.com/shivansh193" className="text-blue-500 hover:underline">shivanshkalra</a></li>
              <li>Phone: +91-9717094960</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Rohan Mathur</h2>
            <ul className="list-disc ml-6">
              <li>Email: rohanmathur.work@gmail.com</li>
              <li>Github: <a href="https://github.com/RohanMathur2002" className="text-blue-500 hover:underline">rohanmathur</a></li>
              <li>Phone: +91-8178034936</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
