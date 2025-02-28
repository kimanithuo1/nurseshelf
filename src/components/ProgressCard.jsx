const ProgressCard = ({ title, progress, color }) => {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="w-full bg-light rounded-full h-4 mb-2">
          <div className={`h-4 rounded-full ${color}`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      </div>
    )
  }
  
  export default ProgressCard
  
  