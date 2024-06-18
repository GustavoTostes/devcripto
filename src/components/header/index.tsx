import { useNavigate } from 'react-router-dom';
import { Coins } from 'lucide-react';

function Header() {

    const navigate = useNavigate()

    return (

        <header className="flex justify-center items-center p-4 bg-zinc-900">
        
            <div className='flex justify-center items-center cursor-pointer' onClick={() => navigate('/')}>
                
                <h2 className="text-2xl font-medium italic">Dev <span className=" text-cyan-600">Cripto</span></h2>

                <Coins/>

            </div>
        
        </header>

    )

}

export default Header