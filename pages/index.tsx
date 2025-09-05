import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { BACKGROUND_IMAGE } from "@/constants";
import Head from "next/head";
import Pill from "@/components/common/Pill";
import { FILTER_LABELS } from "@/constants";
import { useState } from "react";



export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Find your favorite place</title>
        <meta name="description" content="Home page" />
      </Head>

      <section className="h-[70vh] bg-cover bg-center flex items-center justify-center 
      text-white text-center px-4" style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>

        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your favorite place!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
          </div>

      </section>
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={() => setActiveFilter(activeFilter === label ? null : label)}
            />
          ))}
        </div>
      </section>
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <Card
              key={index}
              property={property} />
          ))}
        </div>
      </section>
    </>
  );
};