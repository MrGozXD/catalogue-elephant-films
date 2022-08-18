import loadingIcon from './loadingIcon.svg';
import './Loading.css';

function Loading() {
    return(
        <div className="Loading">
            <header className="Loading-header">
                <img src={loadingIcon} className="Loading-loadingIcon" alt="loadingIcon" />
                <p>Veuillez patienter</p>
            </header>
        </div>
    );
}

export default Loading;