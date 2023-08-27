import { Link } from 'react-router-dom';

const BreadCrumbs = ({ to }) => {
    return (
        <div className="flex justify-center items-center ">
            <div className="text-sm breadcrumbs text-center">

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link >{to}</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default BreadCrumbs;
