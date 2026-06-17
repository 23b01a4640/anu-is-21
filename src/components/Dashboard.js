"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Lock, Upload, CheckCircle2 } from "lucide-react";

const adventures = [
  {
    id: "june-2026",
    month: "June 2026",
    title: "Buy Yourself a pair of Sunflowers 🌻",
    why: "You spend so much time caring about everyone else. This month, I want you to buy flowers for yourself and remember that you're worth celebrating too.",
    didYouKnow: "The sunflower theory is that when everything goes dark, you naturally turn toward the people who feel like home. Not because you have to, but because their presence becomes your light.",
    image: "/photos/sunflowers.png"
  },
  {
    id: "july-2026",
    month: "July 2026",
    title: "Secunderabad Clock Tower 🕰️",
    why: "Every city has places we pass but never truly see. Start this journey by slowing down and noticing history hiding in plain sight.",
    didYouKnow: "Did you know that the famous Secunderabad Clock Tower was once marked for demolition in 2003 to make way for increasing traffic? Fortunately, heritage lovers and citizens raised concerns, and the tower was saved. Today, it remains one of Secunderabad's most recognizable landmarks and a symbol of the city's colonial-era history.",
    challenge: "Talk to a stranger and eat local street food there.",
    image: "/photos/clock-tower.png"
  },
  {
    id: "august-2026",
    month: "August 2026",
    title: "Manam Chocolate Factory 🍫",
    why: "Because adulthood is already serious enough. Eat chocolate. Be happy.",
    didYouKnow: "In 2024, Manam Chocolate Karkhana was featured in TIME's World's Greatest Places list, putting a Hyderabad chocolate factory on a global travel map. Many of the cacao beans used are sourced from farms in West Godavari, helping showcase Indian-grown cacao to the world.",
    challenge: "Get to know about as many as possible flavours in combination with chocolate and let me know your favourite!",
    image: "/photos/manam-chocolate.png"
  },
  {
    id: "september-2026",
    month: "September 2026",
    title: "Bansilalpet Stepwell 🏛️",
    why: "Beautiful things can stay hidden for years and still be worth discovering.",
    didYouKnow: "For nearly 40 years, many locals didn't even know a historic stepwell existed there. During restoration, over 2,000 tons of debris and waste were removed to uncover the structure. After its restoration in 2022, the project received international recognition for heritage conservation and sustainability. The stepwell dates back to the 17th century during the Asaf Jahi (Nizam) period, making it one of Hyderabad's oldest surviving water structures.",
    challenge: "Go on a weekend wearing a short kurti, wide leg pants with jhumkas and click a photo there. Share the photos with me. Counting on You!",
    image: "/photos/bansilalpet-stepwell.png"
  },
  {
    id: "october-2026",
    month: "October 2026",
    title: "Go To A Stand-up Comedy Show Alone 🎤",
    why: "Confidence grows when you stop waiting for company and start creating experiences for yourself.",
    didYouKnow: "Many standup comedians are actually deep empaths. They often suffered a lot in their lives to reach this level of humor, turning their trauma into jokes so that the audience would never know the pain behind the laughter.",
    challenge: "Interact with the comedian of that night and take a picture with him.",
    image: "/photos/standup-comedy.png"
  },
  {
    id: "november-2026",
    month: "November 2026",
    title: "Shilparamam 🏺",
    why: "Art reminds us that life isn't just about productivity.",
    didYouKnow: "Established in 1992, Shilparamam was built to provide a platform for artisans and to preserve traditional Indian arts and crafts. There is a unique Rock Museum which displays fascinating rock formations and stone collections, blending nature with art.",
    challenge: "Talk to the artisans, know about their craft, try pottery, do some good shopping.",
    image: "/photos/shilparamam.png"
  },
  {
    id: "december-2026",
    month: "December 2026",
    title: "Sunset Cinema Club 🍿",
    why: "Some movies deserve stars above the screen.",
    didYouKnow: "It's India's first immersive outdoor cinema experience. Unlike regular theatres, Sunset Cinema Club screens movies in open-air venues, letting you enjoy films under the night sky.",
    challenge: "Go on a lazy saturday, grab some caramel popcorn and coke, watch a good movie!",
    image: "/photos/sunset-cinema.png"
  },
  {
    id: "january-2027",
    month: "January 2027",
    title: "Chowmahalla Palace 👑",
    why: "Walk through history and imagine all the stories these walls have witnessed.",
    didYouKnow: "The name comes from the Urdu words \"Chow\" (four) and \"Mahal\" (palace) because the complex originally consisted of four grand palaces. For nearly 200 years, Chowmahalla Palace served as the official residence and seat of power of the Nizams of Hyderabad, one of the wealthiest royal families in history.",
    challenge: "Put on a good kurti set and explore the palace.",
    image: "/photos/chowmahalla-palace.png"
  },
  {
    id: "february-2027",
    month: "February 2027",
    title: "Svaasa Library Coffee Shop ☕",
    why: "Slow mornings. Books. Coffee. The perfect reminder that peace can be productive too.",
    didYouKnow: "One of their most unique ideas is that they sell only 35 cups of coffee a day. If a 36th customer arrives after they're sold out, that cup is free! You won't find loud music or a crowded mall vibe here. The space is designed for peaceful conversations, solo reading sessions, and mindful coffee drinking.",
    challenge: "Go on a sunday morning. Learn some new skill online from the cafe. Order good food. Or maybe, make a new friend!",
    image: "/photos/svaasa-coffee.png"
  },
  {
    id: "march-2027",
    month: "March 2027",
    title: "RTC X Roads Movie 🎬",
    why: "Experience cinema the Hyderabad way.",
    didYouKnow: "For decades, RTC X Roads has been the go-to place for movie lovers. Almost every major Telugu movie release creates a festival-like atmosphere here. It was also known as \"Charminar Chowrasta\". The area reportedly got this nickname because of the nearby Charminar Cigarette Factory operated by VST.",
    challenge: "Watch a movie on a weekend. Eat biryani in the OG restaurant Baawarchi after the show.",
    image: "/photos/rtc-x-roads.png"
  },
  {
    id: "april-2027",
    month: "April 2027",
    title: "Charminar Night Market 🌙",
    why: "Every great city has a heartbeat. Hyderabad's beats loudest after sunset.",
    didYouKnow: "Built in 1591 by Muhammad Quli Qutb Shah, Charminar was completed more than 40 years before the Taj Mahal. It has stood at the heart of Hyderabad for over 430 years. Next to Charminar is Laad Bazaar, a market that has been selling colorful bangles, pearls, and traditional accessories for centuries.",
    challenge: "Buy some Kashmiri bangles for both of us.",
    image: "/photos/charminar.png"
  },
  {
    id: "may-2027",
    month: "May 2027",
    title: "Coforge Public Library 📚",
    why: "End the challenge where growth begins—with curiosity.",
    didYouKnow: "Coforge combines the quiet focus of a library with the comfort of a modern community space, making it a favorite spot for readers, students, and remote workers. Studies show that regular reading can strengthen neural connections, improve memory, and increase empathy, making libraries like Coforge a workout space for your mind.",
    challenge: "Go on a Sunday morning. Pick up a small book and try to complete it there.",
    image: "/photos/coforge.png"
  }
];

export function Dashboard() {
  const [uploadedImages, setUploadedImages] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const fileInputRefs = useRef({});

  useEffect(() => {
    const saved = localStorage.getItem('anu_memories');
    if (saved) {
      try {
        setUploadedImages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved memories");
      }
    }
    setIsLoaded(true);
  }, []);

  const handleImageUpload = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);

          const newImages = { ...uploadedImages, [id]: dataUrl };
          setUploadedImages(newImages);
          localStorage.setItem('anu_memories', JSON.stringify(newImages));
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isLoaded) return null;

  // The spectacular final page featuring the 12 photos as a beautifully framed collage
  if (showFinalPage) {
    return (
      <div className="w-full h-full min-h-screen bg-[#FFF8E7] py-20 px-4 md:px-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl w-full mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-yellow-900 mb-6 tracking-tight px-4">
            A Year of Beautiful Memories
          </h1>
          <p className="text-yellow-800/80 font-serif text-lg md:text-2xl italic mb-12 md:mb-20 max-w-3xl mx-auto px-4">
            "Here's to all the memories we've made this year!"
          </p>

          {/* Large Realistic Wooden Frame Collage */}
          <div className="relative mx-auto bg-[#f8f4e6] p-6 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-100 max-w-5xl rounded-sm">
            {/* Wooden frame layers for realism */}
            <div className="absolute inset-0 border-[16px] md:border-[28px] border-[#6b4226] shadow-[inset_0_15px_40px_rgba(0,0,0,0.6)] z-20 pointer-events-none rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] md:border-[34px] border-[#8b5a2b] shadow-inner z-10 pointer-events-none mix-blend-multiply rounded-sm"></div>

            {/* Inner passepartout (matting) */}
            <div className="absolute inset-[20px] md:inset-[34px] border-[12px] md:border-[24px] border-[#fffaed] shadow-[inset_0_2px_15px_rgba(0,0,0,0.1)] z-10 pointer-events-none"></div>

            {/* Photo Grid Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-[24px] pb-[24px] px-[24px] md:pt-[36px] md:pb-[36px] md:px-[36px]">
              {adventures.map((adv, i) => (
                <motion.div
                  key={adv.id}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  className="aspect-square bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-md relative border border-gray-200 cursor-pointer hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-full h-full bg-gray-100 overflow-hidden flex items-center justify-center">
                    {uploadedImages[adv.id] ? (
                      <img src={uploadedImages[adv.id]} alt={adv.month} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-300 font-serif text-3xl font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div className="absolute bottom-2 md:bottom-3 left-0 w-full text-center text-gray-500 font-serif italic text-[10px] md:text-sm">
                    {adv.month}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 mb-12">
            <button
              onClick={() => setShowFinalPage(false)}
              className="text-yellow-700 hover:text-yellow-900 underline font-medium transition-colors"
            >
              &larr; Back to Adventures
            </button>
            <button
              onClick={() => window.location.reload()}
              className="text-yellow-600/80 hover:text-yellow-900 text-sm transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const totalCompleted = Object.keys(uploadedImages).length;

  return (
    <div className="w-full h-full min-h-screen bg-[#FFF8E7] text-yellow-950 overflow-y-auto pt-16 pb-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-5xl font-serif text-yellow-900 mb-4 tracking-tight"
          >
            The 12 Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-yellow-700/80 uppercase tracking-widest text-sm font-semibold"
          >
            {totalCompleted} of 12 Completed
          </motion.p>
        </header>

        <div className="space-y-16">
          {adventures.map((adv, index) => {
            // June is always unlocked. Others unlock only if the previous month has a photo uploaded.
            const isUnlocked = index === 0 || !!uploadedImages[adventures[index - 1].id];
            const hasImage = !!uploadedImages[adv.id];

            if (!isUnlocked) {
              return null;
            }

            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(250,204,21,0.15)] border border-yellow-100"
              >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  {/* Left Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="text-yellow-600 font-medium tracking-wider text-sm uppercase mb-2 block">
                        {adv.month}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif text-yellow-900 leading-tight">
                        {adv.title}
                      </h2>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-yellow-800 mb-3">Why:</h3>
                      <p className="text-yellow-800/80 leading-relaxed font-serif text-lg mb-6">
                        {adv.why}
                      </p>

                      <div className="space-y-4">
                        {adv.didYouKnow && (
                          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100/50">
                            <h4 className="font-bold text-orange-900 mb-2">Did you know?</h4>
                            <p className="text-orange-900/80 leading-relaxed font-serif text-[1.05rem]">
                              {adv.didYouKnow}
                            </p>
                          </div>
                        )}

                        {adv.challenge && (
                          <div className="bg-green-50 p-6 rounded-2xl border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                              Your Challenge:
                            </h4>
                            <p className="text-green-900/80 leading-relaxed font-serif text-[1.05rem]">
                              {adv.challenge}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Upload Memory Button Section */}
                    <div className="mt-8 pt-6 border-t border-yellow-100">
                      {hasImage ? (
                        <div className="flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 cursor-pointer shadow-md flex-shrink-0"
                            onClick={() => fileInputRefs.current[adv.id]?.click()}
                          >
                            <img src={uploadedImages[adv.id]} alt="Memory" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-green-700 font-bold flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5" /> Memory Saved!
                            </p>
                            <p className="text-sm text-yellow-600/80 mt-1 cursor-pointer hover:underline" onClick={() => fileInputRefs.current[adv.id]?.click()}>
                              Click photo to change
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-yellow-800 font-medium mb-3 text-sm uppercase tracking-wide">Ready to unlock the next month?</p>
                          <button
                            onClick={() => fileInputRefs.current[adv.id]?.click()}
                            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm"
                          >
                            <Upload className="w-4 h-4" />
                            Upload Your Photo
                          </button>
                        </div>
                      )}

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={el => fileInputRefs.current[adv.id] = el}
                        onChange={(e) => handleImageUpload(adv.id, e)}
                      />
                    </div>

                  </div>

                  {/* Right Side Image (HARDCODED) */}
                  <div className="flex-1 w-full max-w-md">
                    <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 bg-yellow-100">
                      <img
                        src={adv.image}
                        alt={`Adventure for ${adv.month}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Congratulatory Note & Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 mb-16 text-center px-4"
        >
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-yellow-200 shadow-2xl relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <h2 className="relative z-10 text-3xl md:text-4xl font-serif text-yellow-900 mb-4">
              Congratulations baddie! 🌻
            </h2>
            <p className="relative z-10 text-yellow-800/90 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-md mx-auto">
              Small steps, big impact!
            </p>
            <button
              onClick={() => window.scrollTo(0, 0) || setShowFinalPage(true)}
              className="relative z-10 bg-yellow-900 hover:bg-yellow-950 text-white px-8 md:px-10 py-4 rounded-full font-serif text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              See your masterpiece &rarr;
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
