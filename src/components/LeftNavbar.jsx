import { useState } from "react";

const LeftNavbar = () => {
    const text = {
        content1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit quam dignissimos. Voluptatum praesentium ",
        content2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit quam dignissimos. Voluptatum praesentium ",
        content3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit quam dignissimos. Voluptatum praesentium ",
    };

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const handleClick1 = () => {
        setToggle1((prev) => !prev);
    };
    const handleClick2 = () => {
        setToggle2((prev) => !prev);
    };
    const handleClick3 = () => {
        setToggle3((prev) => !prev);
    };

    return (
        <>
            <div className="w-[100%] h-[100vh] ">

                <div className="h-[auto] w-full flex justify-center">

                    <div>

                        <div className="my-4">
                        <div className=" w-[500px] flex justify-between bg-red-50 p-3 rounded-bl-2xl rounded-br-2xl border-b-2" >
                            <h3>Content 1</h3>
                            <button className="btn btn-secondary" onClick={handleClick1}>{toggle1 ? '-' : '+'}</button>
                        </div>
                        <div className={`flex justify-center w-[500px] bg-red-50 shadow-[0px_10px_10px] shadow-red-200 p-3 rounded-bl-2xl rounded-br-2xl transition-all duration-200 ease-linear ${toggle1 ? 'max-h-20 opacity-100':'max-h-0 opacity-0'}`}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptate.</p></div>
                        </div>

                        <div className="my-4">
                        <div className=" w-[500px] flex justify-between bg-red-50 p-3 rounded-bl-2xl rounded-br-2xl border-b-2" >
                            <h3>Content 2</h3>
                            <button className="btn btn-secondary" onClick={handleClick2}>{toggle2 ? '-' : '+'}</button>
                        </div>
                        <div className={`flex justify-center w-[500px] bg-red-50 shadow-[0px_10px_10px] shadow-red-200 p-3 rounded-bl-2xl rounded-br-2xl transition-all duration-200 ease-linear ${toggle2 ? 'max-h-20 opacity-100':'max-h-0 opacity-0'}`}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptate.</p></div>
                        </div>

                        <div className="my-4">
                        <div className=" w-[500px] flex justify-between bg-red-50 p-3 rounded-bl-2xl rounded-br-2xl border-b-2" >
                            <h3>Content 3</h3>
                            <button className="btn btn-secondary" onClick={handleClick3}>{toggle3 ? '-' : '+'}</button>
                        </div>
                        <div className={`flex justify-center w-[500px] bg-red-50 shadow-[0px_10px_10px] shadow-red-200 p-3 rounded-bl-2xl rounded-br-2xl transition-all duration-200 ease-linear ${toggle3 ? 'max-h-20 opacity-100':'max-h-0 opacity-0'}`}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptate.</p></div>
                        </div>

                        

                    </div>

                    

                    


                </div>



            </div>
        </>
    );
};

export default LeftNavbar;
