// > INITIAL DOM CONTENT LOAD
document.addEventListener('DOMContentLoaded', () => {
  //invoke displayQuote and getPhoto functions
  displayQuote();
  getPhoto();
});
  
// > QUOTES
const quotes = [
  { author: "Rumi", quote: "The wound is the place where the Light enters you." },
  { author: "Maya Angelou", quote: "I've learned that making a living is not the same thing as making a life." },
  { author: "J.K. Rowling", quote: "It matters not what someone is born, but what they grow to be." },
  { author: "Friedrich Nietzsche", quote: "He who has a why to live can bear almost any how." },
  { author: "Dale Carnegie", quote: "Most of the things we worry about never happen." },
  { author: "Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on." },
  { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { author: "Khalil Gibran", quote: "Your pain is the breaking of the shell that encloses your understanding." },
  { author: "Dr. Seuss", quote: "Sometimes you will never know the value of a moment until it becomes a memory." },
  { author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
  { author: "Paulo Coelho", quote: "When you are following your own path, you never feel lost." },
  { author: "Martin Luther King Jr.", quote: "We must accept finite disappointment, but we must never lose infinite hope." },
  { author: "Henry David Thoreau", quote: "Live in each season as it passes; breathe the air, drink the drink, taste the fruit." },
  { author: "Buddha", quote: "Every morning we are born again. What we do today matters most." },
  { author: "F. Scott Fitzgerald", quote: "In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars." },
  { author: "Vincent Van Gogh", quote: "What would life be if we had no courage to attempt anything?" },
  { author: "Steve Jobs", quote: "Sometimes life hits you in the head with a brick. Don't lose faith." },
  { author: "A.A. Milne", quote: "You are braver than you believe, stronger than you seem, and smarter than you think." },
  { author: "Anne Frank", quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world." },
  { author: "Confucius", quote: "Our greatest glory is not in never falling, but in rising every time we fall." },
  { author: "Walt Whitman", quote: "Keep your face always toward the sunshine—and shadows will fall behind you." },
  { author: "Lao Tzu", quote: "New beginnings are often disguised as painful endings." },
  { author: "J.R.R. Tolkien", quote: "All we have to decide is what to do with the time that is given us." },
  { author: "Elizabeth Gilbert", quote: "Embrace the glorious mess that you are." },
  { author: "Helen Keller", quote: "Although the world is full of suffering, it is also full of the overcoming of it." },
  { author: "Barbara Kingsolver", quote: "You don’t have to be a genius, you just have to be yourself." },
  { author: "Ralph Waldo Emerson", quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." },
  { author: "William Shakespeare", quote: "The earth has music for those who listen." },
  { author: "L.M. Montgomery", quote: "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?" },
  { author: "Margaret Mead", quote: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." },
  { author: "Victor Hugo", quote: "Even the darkest night will end and the sun will rise." },
  { author: "Jim Rohn", quote: "Take care of your body. It's the only place you have to live." },
  { author: "Mahatma Gandhi", quote: "The best way to find yourself is to lose yourself in the service of others." },
  { author: "Khalil Gibran", quote: "Your most beautiful days are not behind you, they are in front of you." },
  { author: "Catherine Pulsifer", quote: "In the middle of every difficulty lies opportunity." },
  { author: "Helen Keller", quote: "Life is either a daring adventure or nothing at all." },
  { author: "Louisa May Alcott", quote: "It takes two to make a thing go right." },
  { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { author: "Unknown", quote: "Just when the caterpillar thought the world was over, it became a butterfly." },
  { author: "Edgar Allan Poe", quote: "All that we see or seem is but a dream within a dream." },
  { author: "John Keats", quote: "A thing of beauty is a joy forever." },
  { author: "William Ernest Henley", quote: "I am the master of my fate: I am the captain of my soul." },
  { author: "Rainer Maria Rilke", quote: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final." },
  { author: "Mahatma Gandhi", quote: "You may never know what results come from your actions, but if you do nothing, there will be no results." },
  { author: "Barbara De Angelis", quote: "The more you praise and celebrate your life, the more there is in life to celebrate." },
  { author: "Ralph Waldo Emerson", quote: "The only way to have a friend is to be one." },
  { author: "Wayne Dyer", quote: "You cannot always control what goes on outside. But you can always control what goes on inside." },
  { author: "Henry Ward Beecher", quote: "The first step towards getting somewhere is to decide you’re not going to stay where you are." }, 
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated." },
  { author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
  { author: "Nelson Mandela", quote: "It always seems impossible until it's done." },
  { author: "Steve Jobs", quote: "Your time is limited, so don’t waste it living someone else’s life." },
  { author: "Helen Keller", quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence." },
  { author: "Vince Lombardi", quote: "The measure of who we are is what we do with what we have." },
  { author: "Ralph Waldo Emerson", quote: "The only person you are destined to become is the person you decide to be." },
  { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
  { author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
  { author: "Henry David Thoreau", quote: "Go confidently in the direction of your dreams. Live the life you have imagined." },
  { author: "Tony Robbins", quote: "The only limit to your impact is your imagination and commitment." },
  { author: "Zig Ziglar", quote: "You don’t have to be great to start, but you have to start to be great." },
  { author: "Marva Collins", quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently." },
  { author: "John F. Kennedy", quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future." },
  { author: "Viktor Frankl", quote: "When we are no longer able to change a situation, we are challenged to change ourselves." },
  { author: "Buddha", quote: "The mind is everything. What you think you become." },
  { author: "Marcus Aurelius", quote: "You have power over your mind—not outside events. Realize this, and you will find strength." },
  { author: "Dale Carnegie", quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all." },
  { author: "Robert Frost", quote: "In three words I can sum up everything I’ve learned about life: it goes on." },
  { author: "C.S. Lewis", quote: "You are never too old to set another goal or to dream a new dream." },
  { author: "Ralph Marston", quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
  { author: "William Ernest Henley", quote: "I am the master of my fate: I am the captain of my soul." },
  { author: "Mahatma Gandhi", quote: "The best way to find yourself is to lose yourself in the service of others." },
  { author: "Og Mandino", quote: "I will persist until I succeed." },
  { author: "Lou Holtz", quote: "Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it." },
  { author: "Les Brown", quote: "Shoot for the moon. Even if you miss it you will land among the stars." },
  { author: "Franklin D. Roosevelt", quote: "The only thing we have to fear is fear itself." },
  { author: "Thomas Edison", quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." },
  { author: "Napoleon Hill", quote: "Whatever the mind can conceive and believe, it can achieve." },
  { author: "Jim Rohn", quote: "Success is nothing more than a few simple disciplines, practiced every day." },
  { author: "Dr. Seuss", quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." },
  { author: "Unknown", quote: "The only person you should try to be better than is the person you were yesterday." },
  { author: "Simon Sinek", quote: "People don’t buy what you do; they buy why you do it." },
  { author: "Anonymous", quote: "The best time to plant a tree was twenty years ago. The second best time is now." },
  { author: "Robert H. Schuller", quote: "Tough times never last, but tough people do." },
  { author: "Peter Drucker", quote: "The best way to predict the future is to create it." },
  { author: "Jiminy Cricket", quote: "Always let your conscience be your guide." },
  { author: "Coco Chanel", quote: "Success is often achieved by those who don’t know that failure is inevitable." },
  { author: "Anonymous", quote: "Don’t watch the clock; do what it does. Keep going." },
  { author: "Paulo Coelho", quote: "When you want something, all the universe conspires in helping you to achieve it." },
  { author: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { author: "A.A. Milne", quote: "You are braver than you believe, stronger than you seem, and smarter than you think." },
  { author: "Martin Luther King Jr.", quote: "The time is always right to do what is right." },
  { author: "Henry Ford", quote: "Coming together is a beginning; keeping together is progress; working together is success." },
  { author: "Dalai Lama", quote: "Happiness is not something ready made. It comes from your own actions." },
  { author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
  { author: "Abraham Lincoln", quote: "The best way to predict your future is to create it." },
  { author: "Tony Gaskins", quote: "If you don’t build your dream, someone else will hire you to help them build theirs." },
  { author: "Rumi", quote: "The wound is the place where the Light enters you." },
  { author: "Catherine Pulsifer", quote: "The only way to achieve the impossible is to believe it is possible." },
  { author: "Jack Canfield", quote: "Don’t worry about failures, worry about the chances you miss when you don’t even try." },
  { author: "Earl Nightingale", quote: "We become what we think about." },
  { author: "Anonymous", quote: "Act as if what you do makes a difference. It does." },
  { author: "John Quincy Adams", quote: "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish." },
  { author: "Walt Whitman", quote: "Keep your face always toward the sunshine—and shadows will fall behind you." },
  { author: "Babe Ruth", quote: "It’s hard to beat a person who never gives up." },
  { author: "Robert Louis Stevenson", quote: "Don’t judge each day by the harvest you reap but by the seeds that you plant." },
  { author: "Peter Nivio Zarlenga", quote: "The future you see is the future you get." },
  { author: "Steve Martin", quote: "Be so good they can't ignore you." },
  { author: "Catherine Ponder", quote: "The more you praise and celebrate your life, the more there is in life to celebrate." },
  { author: "Tim Notke", quote: "Hard work beats talent when talent doesn't work hard." },
  { author: "Frank A. Clark", quote: "If you can dream it, you can achieve it." },
  { author: "Albert Schweitzer", quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." },
  { author: "Rita Schiano", quote: "When you focus on the good, the good gets better." },
  { author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." },
  { author: "Dolly Parton", quote: "The way I see it, if you want the rainbow, you gotta put up with the rain." },
  { author: "Ralph Waldo Emerson", quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." }
]


// > DISPLAY QUOTE FUNCTION
function displayQuote () {
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  //gerate a random index number
  const randomIndex = Math.floor(Math.random() * quotes.length);
  //extract a quote using random index
  const newQuote = quotes[randomIndex];
  //add text content to quote div
  quoteEl.textContent = `${newQuote.quote} `;
  authorEl.textContent = `- ${newQuote.author}`
}

// > ONCLICK, DISPLAY NEW QUOTE AND PHOTO
document.getElementById('button').addEventListener('click', displayQuote);
document.getElementById('button').addEventListener('click', getPhoto);

// > API KEY FOR PEXEL API REQUEST
const apiKey = 'j4Y9cM8ZC7hcWaxacJ6hNHHmiiRLTrGnCvh0p4ijAdfBRfmkDohS8vgU'

// > LOAD MESSAGE FUNCTION
async function getPhoto() {
  try {
    // initial data fetch from provided server:
    const response = await fetch('https://api.pexels.com/v1/search?query=scenic&orientaion=landscape&size=large&per_page=100', 
      {
          method: 'GET',
          headers: {
              'Authorization': apiKey
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // We need to check to make sure photos are returned
      if (data.photos && data.photos.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.photos.length);
          const randomPhoto = data.photos[randomIndex];
          displayPhoto(randomPhoto);
      } else {
          console.log('No photos found.');
      }
      console.log(data); // Handle the response data here
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

// > FUNCTION TO DISPLAY PHOTO
function displayPhoto(photo) {
  //retrieve the largest version of photo
  const photoUrl = photo.src.large;

  // Set the background image for the body element
  document.body.style.backgroundImage = `url(${photoUrl})`;
  document.body.style.backgroundSize = 'cover'; 
  document.body.style.backgroundPosition = 'center'; 
  document.body.style.backgroundRepeat = 'no-repeat'; 

  //create logic for copying to clipboard (async func)
  const copyToClipboard = document.getElementById('copy');
  copyToClipboard.addEventListener('click',() => {
    //code to grab the clipboard and do something with it
    navigator.clipboard.writeText(`${quote.textContent} ${author.textContent}`)
      .then(() => {
          confirm('Quote copied to clipboard!');
      })
      .catch(err => {
      // This code runs if there was an error
      console.error('Failed to copy the quote: ', err);
      });
  })
};