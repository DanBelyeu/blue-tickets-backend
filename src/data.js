var db  = require('./db');

const getTicketCount = async (name) => {
    const result = await db.query('select count from ticket_counts where child = $1', [name]);
    return result.rows[0].count;
}

const incrementTicketCount = async (name) => {
    await db.query('update ticket_counts set count = count + 1 where child = $1', [name]);
}

const decrementTicketCount = async (name) => {
    await db.query('update ticket_counts set count = count - 1 where child = $1', [name]);
}

const lookupItems = async () => {
    const result = await db.query('select * from items where status', []);
    return result.rows;
}

const addItem = async (name, description, cost, image) => {
    await db.query('insert into items values ($1, $2, $3, $4, true)', [name, description, cost, image]);
}

module.exports = { getTicketCount, incrementTicketCount, decrementTicketCount, lookupItems, addItem };