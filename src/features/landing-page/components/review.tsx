// components/ReviewHighlights.tsx
import { useState, useEffect } from 'react';

const ReviewHighlights = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "Julia Murga Aslla",
      rating: 5,
      text: "Really helpful and easy to talk to, explained everything clearly and made the process a lot less stressful. He is the BEST lawyer in town!",
    },
    {
      id: 2,
      name: "Bilal Zulfiqar",
      rating: 5,
      text: "Top-notch immigration lawyer! Fast, reliable, and truly cares about your case. Turned a complicated process into a smooth success. Couldn’t have asked for better support, highly recommend!",
    },
    {
      id: 3,
      name: "Tnaveer Jan.",
      rating: 5,
      text: "I had a great experience with Mr. Malik for immigration advice. His staff was welcoming and attentive, making the process seamless. The attorneys are knowledgeable and provided clear explanations, addressing all my questions with patience. Their commitment to client success was evident, and I felt valued throughout the consultation.",
    }
  ]);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Trusted by many Clients
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Read why families and individuals choose Malik & Associates for their immigration needs
          </p>
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-900">5/5 Rating</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl italic text-gray-700 mb-6">
              "{reviews[currentReview].text}"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {reviews[currentReview].name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">{reviews[currentReview].name}</h4>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full ${currentReview === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ReviewHighlights;
