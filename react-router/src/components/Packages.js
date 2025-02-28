import { Link } from 'react-router-dom'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) =><li key={i}><Link to={`/packages/${i}`}>{eachPackage}</Link></li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
                
            </div>
        </div>
    )
}