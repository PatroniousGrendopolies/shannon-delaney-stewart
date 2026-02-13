import Link from "next/link";

export default function About() {
  return (
    <div className="h-screen w-screen flex flex-col px-8 pt-8 pb-8 relative">
      {/* Header */}
      <div className="text-[15px] tracking-wide mb-16">
        <Link href="/" className="hover:opacity-60 transition-opacity">
          Shannon Delaney Stewart
        </Link>
      </div>

      {/* Two column layout */}
      <div className="flex-1 flex flex-col md:flex-row gap-16 md:gap-32 max-w-6xl">
        {/* Left column */}
        <div className="flex-1 flex flex-col justify-start text-[15px] leading-relaxed">
          <p className="mb-6">
            <Link href="/" className="underline hover:opacity-60 transition-opacity">
              Shannon Delaney Stewart
            </Link>{" "}
            is a photographer based in Tiohtià:ke, the territory of the
            Kanien&apos;keha:ka (Montréal, Québec). She specializes in portraiture,
            editorial, and e-commerce imagery.
          </p>

          <p className="mb-6">
            For commissions contact{" "}
            <a
              href="mailto:shannondelaneystewart@gmail.com"
              className="italic hover:opacity-60 transition-opacity"
            >
              shannondelaneystewart@gmail.com
            </a>
          </p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-60 transition-opacity mb-6 inline-block"
          >
            Instagram
          </a>

          <p className="font-medium">
            Commercial portfolio available upon request
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col justify-start text-[15px] leading-relaxed">
          <div className="mb-8">
            <p className="italic mb-1">Education</p>
            <p>Photography BFA, Emily Carr University of Art and Design 2016</p>
          </div>

          <div>
            <p className="italic mb-1">
              Features&amp;Commissions&amp;Press&amp;Clients
            </p>
            <p>
              VOGUE ITALIA, VICE, THE FADER, Lululemon, SSENSE (- Bottega Veneta,
              Prada, Gucci, Diesel, Eckhaus Latta, ERL, Jacquemus, Jil Sander,
              Maison Margiela, Mowalola, Raf Simons, Rick Owens, Vivienne
              Westwood + more), Rudsak, Porn Hub, Bench, Strawberry Western,
              L&apos;Oeuvre, INDIE, IRL, SNUFF....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
