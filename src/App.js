import logo from './logo.svg';
import './App.css';   

function App() {

  const userLogged = "Hendro";
  const userLoggedJSX = <strong>Hendro for future</strong>;

  return (
      
    <div className="App">
      {userLoggedJSX}       
     <div className="Parentbox">
      <div className="Foto">
      <img src="2.jpg"/>
      </div>
      <div className="Deskripsi">     
      <h1 className="Title">The Best Strawberry</h1>
      <p className="Cate">harvested in october</p>
      <p className="Price">Number: #696969</p>
      <p className="Info">It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in products such as candy, soap, lip gloss, perfume, and many others.The garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, [2] Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century.
      </p>
      <p className="hwhw">size</p>
      <table border="1" className="table">
        <tr>
            <td>tidak manis</td>
            <td>mulai manis</td>
            <td>lebuh manis</td>
            <td>paling manis</td>
        </tr>
    </table>
    <button className="but1">Buy Now</button> <button className="but2">Add To Whistlist</button>
    <p className="Info">only 1*</p>
      </div>
      </div> 
      <div className="Parentbox">
      <div className="Foto">
      <img src="4.jpg"/>
      </div>
      <div className="Deskripsi"> 
      <div className="juka">strawberry</div>  
      <h1 className="Title">Unique product</h1>
      <p className="Info2">The garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, [2] Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century.
      </p>
      <p className="hwhwhw">_______________________________________________________________________________________________________________________________________________</p>
      <p className="hwhwhw">colour</p>
      <button className="but3">√</button>
      <button className="but4">√</button>
      <button className="but5">√</button>
      <p className="hwhwhw">sweetnes configuration</p>
      <button className="but8">Buy Now</button><button className="but8">Buy Later</button><button className="but9">Make Sure You Buy</button>
      <div className="juka"><p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="blue" class="w-1 h-1" width={"20"} opacity="30%">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>how to choose the sweetest</p>
      <p className="hwhwhw">――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――</p>
      <p className="hwhwhwhw">148$  <button className="but10">Please add to cart</button></p>
      </div>
      </div>
      </div> 
    </div> 


    
  );
}

export default App;
