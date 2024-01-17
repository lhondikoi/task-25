function createTimestamp() {
    const current_time = new Date()
    return `${current_time.getFullYear()}-${current_time.getMonth()+1}-${current_time.getDate()}T${current_time.getHours()}-${current_time.getMinutes()}-${current_time.getSeconds()}`
}

module.exports = { createTimestamp }