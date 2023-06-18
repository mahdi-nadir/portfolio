import classnames from 'classnames';

function SkillCard({ source, alter, title, percentage, mainTitle, box, percent }) {
    return (
        <div className="flex flex-col justify-center h-200 gap-0 items-center shadow-lg p-10 rounded-xl">
            <img className="tech mb-10 w-150 md:w-200 h-auto" src={source} alt={alter} title={title} />
            <div className={classnames('box', box)}>
                <div className={classnames('percent', percent)}>
                    <svg>
                        <circle cx="45" cy="45" r="45"></circle>
                        <circle cx="45" cy="45" r="45"></circle>
                    </svg>
                    <div className="number">
                        <h2>{percentage}<span>%</span></h2>
                    </div>
                </div>
                <div className="text">{mainTitle}</div>
            </div>
        </div>
    )
}

export default SkillCard