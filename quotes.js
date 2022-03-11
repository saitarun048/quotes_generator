var quotes = [
    'You only live once, but if you do it right, once is enough. - Mae West',
    'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde',
    'It is better to be hated for what you are than to be loved for what you are not. -  Andre Gide',
    'It does not do to dwell on dreams and forget to live. - J.K. Rowling',
    'Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain',
    'Life is what happens to us while we are making other plans. - Allen Saunders',
    'Everything you can imagine is real. - Pablo Picasso',
    'Sometimes the questions are complicated and the answers are simple. - Dr. Seuss',
    'Today you are You, that is truer than true. There is no one alive who is Youer than You. - Dr. Seuss',
    'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein',
    'Some infinities are bigger than other infinities. - John Green',
    'Reality continues to ruin my life. - Bill Watterson',
    "Things change. And friends leave. Life doesn't stop for anybody - Stephen Chbosky",
    'The only way out of the labyrinth of suffering is to forgive. - John Green',
    'We are what we pretend to be, so we must be careful about what we pretend to be. - Kurt Vonnegut'

]

function genQuote() {
    var randno = Math.floor(Math.random() * quotes.length);
    document.getElementById('displayquotes').innerHTML = quotes[randno];
}



