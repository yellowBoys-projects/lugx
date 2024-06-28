import React from "react";

export default function Cards() {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-4">
        <ServiceCard
          img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-01.png"
          alt="LUGX_img.png"
          name="free stroage"
        />
        <ServiceCard
          img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-02.png"
          alt="LUGX_img.png"
          name="user more"
        />
        <ServiceCard
          img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-03.png"
          alt="LUGX_img.png"
          name="replay ready"
        />
        <ServiceCard
          img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-04.png"
          alt="LUGX_img.png"
          name="easy layout"
        />
      </div>
      <div className="text-center">
        <p className="text-red-400 font-bold text-lg ">trending</p>
        <h2 className="text-xl text-center font-bold py-3">trending games</h2>
        <div >

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 ">
          <TrendingCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg"
            alt="..."
            type="Action"
            name="assain creed"
            cart_img="bag"
            cart_alt="..."
            del="$26"
            price="$20"
          />
          <TrendingCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg"
            alt="..."
            type="Action"
            name="assasin creed"
            cart_img="bgb"
            cart_alt="...."
            del=""
            price="$44"
          />
          <TrendingCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg"
            alt="..."
            type="Action"
            name="assasin creed"
            cart_img="..."
            cart_alt="..."
            del="$32"
            price="$30"
          />
          <TrendingCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg"
            alt="..."
            type="Action"
            name="assasin creed"
            cart_img="..."
            cart_alt="..."
            del="$150"
            price="$100"
            />
        </div>
        </div>
      </div>
      <div className="text-center my-10">
        <p className="text-red-400 font-bold text-md">top games</p>
        <h2 className="font-bold text-xl py-4">most played</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 ">
          <TopGamesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
            alt="..."
            name="Assin Creed"
            type="Adventure"
          />
          <TopGamesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg"
            alt="..."
            name="Assasin Cread"
            type="Adventure"
          />
          <TopGamesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-06.jpg"
            alt="..."
            name="Assiasin Creed"
            type="Adventure"
          />
          <TopGamesCard
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-04.jpg"
            alt="..."
            name="Assiasin Creed"
            type="Adventure"
          />
        </div>
      </div>
      <div className="text-center my-10 ">
        <p className="font-bold text-xl py-3 ">categories</p>
        <h2 className="text-lg sm:text-xl text-red-400 font-bold ">top categories</h2>
        <div className="grid grid-cols-1  gap-10 sm:grid-cols-2 sm:m-3 md:grid-cols-4">
          <CatgaroiesCard
            type="Action"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
            alt="...."
          />
          <CatgaroiesCard
            type="Action"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg"
            alt="...."
          />
          <CatgaroiesCard
            type="Action"
            img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg"
            alt="...."
          />
        <CatgaroiesCard
          type="Action"
          img="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg"
          alt="...."
          />
          </div>
      </div>
    </div>
  );
}

export function ServiceCard(props) {
  return (
    <div className=" my-10 text-center text-black ">
      <img src={props.img} alt={props.alt} className="w-16 ring-2 mx-auto object-cover object-center text-black" />
      <p className="font-bold  text-black text-lg py-2">{props.name}</p>
    </div>
  );
}

export function TrendingCard(props) {
  return (
    <div className="px-3 sm:my-10">
      <div className="relative">
        <img src={props.img} alt={props.alt}
        className=" w-full   sm:w-auto  mx-auto object-center "
        />
        <p className="hidden absolute bg-slate-200 font-bold  text-center px-3 py2 rounded-full  top-8 right-16 sm:top-5">
          <del className="text-red-400">{props.del}</del> <br /> <span className="text-green-600">{props.price}</span>
        </p>
      </div>
      <div className="flex items-center justify-between  sm:m-0  bg-blue-400 p-3">
        <div>
          <p className="text-md font-bold text-red-400">{props.type}</p>
          <h5 className="text-lg font-bold ">{props.name}</h5>
        </div>
        <div>
          <img src={props.cart_img} alt={props.cart_alt} 
          className="w-10 ring-2 "
          />
        </div>
      </div>
    </div>
  );
}

export function TopGamesCard(props) {
  return (
    <div className="sm:my-10">
      <img src={props.img} alt={props.alt}
      className="w-4/5 object-cover object-center mx-auto h-auto"
      />
      <div className="py-2">
        <p className="font-bold text-md ">{props.type} </p>
        <h4 className="text-lg font-bold ">{props.name}</h4>
        <button className="px-5 py-2 bg-blue-700 text-white font-bold  rounded-xl hover:bg-red-400 ">EXPLORE</button>
      </div>
    </div>
  );
}

export function CatgaroiesCard(props) {
  return (
    <>
      <div className=" sm:my-10 hover:scale-110 duration-300">
        <p className="bg-blue-700 py-3 rounded-b-xl w-11/12 mx-auto  text-center">{props.type}</p>
        <img src={props.img} alt={props.alt} className="w-4/5 object-cover object-center mx-auto" />
      </div>
    </>
  );
}
