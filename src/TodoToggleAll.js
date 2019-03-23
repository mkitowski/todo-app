import React from 'react'

export function TodoToggleAll(props) {
  return <div>
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
  </div>
}