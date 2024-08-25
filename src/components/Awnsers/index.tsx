export default function QuizAwsers() {
  return (
    <div className="flex justify-center items-center">
      <ul className="p-5 max-w-[400px] flex flex-col gap-4">
        <li className="p-4 bg-blue-500 text-white text-center rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Paris</li>
        <li className="p-4 bg-blue-500 text-white text-center rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Londres</li>
        <li className="p-4 bg-blue-500 text-white text-center rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Madrid</li>
        <li className="p-4 bg-blue-500 text-white text-center rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Bruxelas</li>
      </ul>
    </div>
  );
}
