export default function RecoComponent({ name, recommandation, picture, job, linkedInLink, dark }) {
    return (
        <div className={dark ? 'reco-card shadow-lg shadow-gray-600 hover:shadow-gray-500 rounded-xl' : 'reco-card shadow-lg hover:shadow-xl rounded-xl'}>
            <div className='reco-card-inner'>
                <div className="border-b-2">
                    {linkedInLink ? <a href={linkedInLink} target="_blank" rel="noreferrer"><img className='imageProfil' title="Go to LinkedIn" src={picture} alt='reco' /></a> : <img className='imageProfil' src={picture} alt='reco' />}
                    <h1 className={dark ? "nameDark" : "name"}>{name}</h1>
                    <h1 className={dark ? "jobDark" : "job"}>{job}</h1>
                </div>
                <p className={dark ? "recommandationDark" : "recommandation"}><span className="quotation_marks">“ </span>{recommandation}<span className="quotation_marks"> ”</span></p>
            </div>
        </div>
    )
}