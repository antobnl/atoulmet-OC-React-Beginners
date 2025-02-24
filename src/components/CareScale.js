function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'
    return ( <div>
        {range.map(rangeValue => 
        scaleValue >= rangeValue && <span key={rangeValue.toString()}>{scaleType}</span>
    )}
    </div>

    )

}

export default CareScale