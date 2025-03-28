var db  = require('./db');

const getTicketCount = async (name) => {
    const result = await db.query('select count from ticket_counts where child = $1', [name]);
    return result.rows[0].count;
}

const incrementTicketCount = async (name) => {
    await db.query('update ticket_counts set count = count + 1 where child = $1', [name]);
}

module.exports = { getTicketCount, incrementTicketCount };