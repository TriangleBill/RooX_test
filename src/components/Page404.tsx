import { Link } from 'react-router-dom'

export default function Page404(): JSX.Element {
    return (
        <div style={{textAlign: 'center', fontSize: '20px'}}>
            <h1>Page not found</h1>
            <Link to={'/'}>Back to Home</Link>
        </div>
    )
}
