
const ticketCounts = {
    colton: 0,
    ethan: 0,
    wesley: 0
};

const getTicketCount = (name) => {
    return ticketCounts[name];
}

const incrementTicketCount = (name) => {
    console.log(`${name} had ${ticketCounts[name]} tickets}.`);
    ticketCounts[name] += 1;
    console.log(`${name} now has ${ticketCounts[name]} tickets}.`);
}

module.exports = { getTicketCount, incrementTicketCount };