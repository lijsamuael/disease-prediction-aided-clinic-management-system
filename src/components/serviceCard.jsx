export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="max-w-sm p-6 hover:scale-105 duration-300 flex flex-col justify-start items-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="self-center" src={icon} alt="" width={100} />
      <div>
        <h5 className="mb-2 py-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
