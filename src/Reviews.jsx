function Reviews() {
  return (
    <>
      <section id="reviews" class="py-24 bg-brand-card/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <p class="text-xs uppercase tracking-[0.25em] text-brand-amber font-bold mb-2">
              Kind Words From Regulars
            </p>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Popular Reviews
            </h2>
            <p class="text-neutral-600 text-base">
              Discover why our local community and visiting coffee aficionados
              love gathering at Deny's Café.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “This café is a hidden gem! The ambiance is cozy, the service
                  is excellent, and the drinks are consistently delicious. I
                  tried the cappuccino and it was perfectly balanced. Clean
                  space, comfortable seating, and great vibes.”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=CA';
                "
                  alt="Chloe Anderson avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Chloe Anderson
                  </h4>
                  <p class="text-xs text-neutral-500">
                    Regular • Cappuccino Lover
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “Such a charming café! The staff are cheerful, the coffee is
                  rich and well-made, and the pastries taste fresh. The
                  environment is peaceful and great for studying or unwinding. I
                  loved my iced latte and will happily return soon.”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=EP';
                "
                  alt="Emily Parker avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Emily Parker
                  </h4>
                  <p class="text-xs text-neutral-500">Student & Freelancer</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “Amazing place! The atmosphere is relaxing, the coffee is
                  top-notch, and the desserts are delicious. The employees are
                  kind and quick with service. It’s a great spot to catch up
                  with friends or enjoy quiet reading time.”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=LB';
                "
                  alt="Lucas Bennett avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Lucas Bennett
                  </h4>
                  <p class="text-xs text-neutral-500">Weekend Regular</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “Fantastic café with excellent service and beautifully crafted
                  drinks. My flat white was smooth and aromatic. The café is
                  clean, bright, and very comfortable. Perfect for working or
                  simply enjoying a quiet cup.”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=EW';
                "
                  alt="Ethan Walker avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Ethan Walker
                  </h4>
                  <p class="text-xs text-neutral-500">Design Director</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “A wonderful café experience! The baristas are skilled, the
                  coffee tastes incredible, and the pastries are fresh and
                  flavorful. The cozy décor and calm acoustic playlist make it
                  an ideal place to relax.”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=OG';
                "
                  alt="Oliver Grant avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Oliver Grant
                  </h4>
                  <p class="text-xs text-neutral-500">Coffee Connoisseur</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl shadow-warm border border-brand-caramel/15 flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center space-x-1 text-amber-500 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span class="text-xs text-neutral-400 font-medium ml-2">
                    Verified Patron
                  </span>
                </div>
                <p class="text-neutral-700 italic text-sm leading-relaxed mb-6">
                  “A lovely café with a warm, welcoming atmosphere. The coffee
                  is smooth and flavorful, and the staff are always friendly and
                  attentive. I enjoyed a delicious latte and an almond
                  croissant. Highly recommended!”
                </p>
              </div>
              <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  onerror="
                  this.onerror = null;
                  this.src =
                    'https://placehold.co/100x100/582f0e/f6f4d2?text=SM';
                "
                  alt="Sofia Martinez avatar"
                  class="w-12 h-12 rounded-full object-cover border-2 border-brand-caramel/30"
                />
                <div>
                  <h4 class="font-bold text-brand-dark text-sm">
                    Sofia Martinez
                  </h4>
                  <p class="text-xs text-neutral-500">Book Lover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Reviews;
