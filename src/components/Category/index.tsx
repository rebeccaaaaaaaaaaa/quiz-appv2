
export default function QuizCategorySelector() {
  return (
    <div className="p-5 max-w-[400px] bg-white border-2 border-gray-300 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-800 text-center mb-4">Selecione a Categoria</h1>
      <select className="w-full p-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected hidden>Escolha uma categoria</option>
        <option value="geografia">Geografia</option>
        <option value="historia">História</option>
        <option value="ciencia">Ciência</option>
        <option value="esporte">Esporte</option>
      </select>
    </div>
  );
}
