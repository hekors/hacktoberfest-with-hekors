import { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeaderOptions from '../dataSource/header-options.json';
import LogoImage from '../lib/logo.png';

export default function Header() {
    const headerOptionsDataRef = useRef(HeaderOptions);
    return (
        <div className="header-component flex flex-row items-center justify-between py-4 md:p-0 p-4 sm:m-4 m-0 ">
            <span className="w-16 md:w-32 lg:w-48 name-logo-wrapper">
                <Link to="/">
                    <img src={LogoImage} 
                        alt="logo" 
                        className="w-[180px] h-auto" />
                </Link>
            </span>
            <span className="w-16 md:w-32 lg:w-48 header-options-list-wrapper w-fit h-auto">
                <ul className="header-options-list flex flex-row items-center justify-end gap-5 w-fit h-auto">
                    {headerOptionsDataRef.current?.map((option, optionIndex) => (
                        <li className="header-option-item text-sm text-gray-500 hover:text-gray-600" 
                            key={optionIndex}
                        >
                            <Link to={option?.path}>
                                {option?.title}
                            </Link>
                        </li>
                    ))}
                    <li className="header-option-item">
                        <button className="px-3 py-1.5 rounded shadow-md hover:shadow-none bg-gray-800 hover:bg-gray-700 text-sm text-white"
                            onClick={() => window.open('http://hacktoberfest.com')}
                        >
                            {"hacktoberfest 2022"}
                        </button>
                    </li>
                </ul>
            </span>
        </div>
    )
}