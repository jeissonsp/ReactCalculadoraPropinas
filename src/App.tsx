import { menuItems } from "./data/db";
import "./App.css";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
function App() {

  const { order, addItem } = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl">
          Calculadora de propinas y consumo.
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 ">         
            
            {menuItems.map((item) => (
              <MenuItem
               key={item.id} 
               item={item} 
               addItem= {addItem}
               />
            ))}
          </div>
        </div>
        <div>
          
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContents
            order={order}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
