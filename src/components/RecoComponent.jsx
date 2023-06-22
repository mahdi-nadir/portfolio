export default function RecoComponent({ name, recommandation, picture, job, linkedInLink }) {
    return (
        <div className='reco-card shadow-lg rounded-xl'>
            <div className='reco-card-inner'>
                <div className="border-b-2">
                    {linkedInLink ? <a href={linkedInLink} target="_blank" rel="noreferrer"><img className='imageProfil' title="Go to LinkedIn" src={picture} alt='reco' /></a> : <img className='imageProfil' src={picture} alt='reco' />}
                    <h1 className="name">{name}</h1>
                    <h1 className="job">{job}</h1>
                </div>
                <p className="recommandation"><span className="quotation_marks">“ </span>{recommandation}<span className="quotation_marks"> ”</span></p>
            </div>
        </div>
    )
}