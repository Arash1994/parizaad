import { Heart, Sparkles, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From our hearts to your wardrobe 💕
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* About Section */}
          <section className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-primary">PARIZAAD</span>, where tradition 
              meets contemporary elegance. Based in the heart of Chandigarh, we are a boutique 
              clothing brand specializing in exquisite ethnic and fusion wear.
            </p>
            <p>
              Every piece in our collection is crafted with love, attention to detail, and a 
              deep appreciation for the art of fashion. From intricate mirror work to luxurious 
              silk fabrics, from traditional farshi salwars to modern indowestern designs - 
              each creation tells a unique story.
            </p>
            <p>
              We believe that clothing is more than just fabric and thread. It&apos;s an expression 
              of your personality, a celebration of culture, and a work of art that deserves 
              to be cherished. That&apos;s why we pour our hearts into every stitch, every embellishment, 
              and every design.
            </p>
          </section>

          {/* Values Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Crafted with Love</h3>
              <p className="text-foreground/70">
                Every piece is made with passion and dedication
              </p>
            </div>

            <div className="bg-navy/5 rounded-xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-navy/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Premium Quality</h3>
              <p className="text-foreground/70">
                Only the finest fabrics and materials
              </p>
            </div>

            <div className="bg-green/5 rounded-xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Handcrafted Excellence</h3>
              <p className="text-foreground/70">
                Intricate detailing by skilled artisans
              </p>
            </div>

            <div className="bg-gold/10 rounded-xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Worldwide Reach</h3>
              <p className="text-foreground/70">
                Shipping our creations across the globe
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-gradient-to-br from-primary/5 to-navy/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To bring you exceptional ethnic and fusion wear that celebrates your 
                individuality while honoring traditional craftsmanship. We strive to make 
                every customer feel special, confident, and beautiful in our creations.
              </p>
              <p className="text-foreground/70">
                With worldwide shipping and custom tailoring options, we ensure that 
                distance is no barrier to experiencing the PARIZAAD difference.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Experience PARIZAAD?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Browse our collection and find the perfect piece that speaks to your style
            </p>
            <a
              href="/products"
              className="inline-block gradient-primary text-white px-8 py-3.5 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Explore Our Collection
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
