import services from "../constants/services.json";
import ServiceCard from "./serviceCard";

export default function HomeServices() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div
        className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16"
        // style={{ fontFamily: "Righteous" }}
      >
        <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-widest text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
          Our specialized Services
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
