
import React from 'react'

const input = () => {
    return (
        <div className="input-form">
            <div className="input-field">
                <input
                    type="text"
                    placeholder="해야할 일..."
                    ref={inputRef}
                    onKeyDown={active_Enter}
                />
                <textarea
                    placeholder='세부 사항...'
                    ref={detailRef}
                />
            </div>

            <button className="add-btn" onClick={handle_input}>추가</button>
        </div>
    )
}

export default input
