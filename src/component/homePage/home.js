import React from 'react';
import './home.css';

const Home = () => (
  <div className="history">
    <h1 className="title">CALCULATOR HISTORY</h1>
    <p>
      The arithmometer was the first commercially successful calculating machine to complete all four
      basic operations — addition, subtraction, multiplication and division — according to IBM.
      Like Hahn, Thomas also based his calculator on the stepped drum mechanism of Leibniz.
      The machine featured a second result display for subtraction and division as well as a
      multiplication gear.
    </p>
    <p>
      The IBM 608 was the first calculating machine to use solid-state transistors instead of
      vacuum tubes. The machine was housed in several large cabinets.
      According to the company’s website,
      customers could purchase the machine for $83, 210 (or rent it for $1,760 a month).
      The machine’s main memory could store 40 nine-digit numbers and
      could perform 4,500 additions per second, among other operations.
    </p>
    <p className="reference">
      Reference:
      <a href="https://edtechmagazine.com/k12/article/2012/11/calculating-firsts-visual-history-calculators#:~:text=1820%3A%20First%20Commercially%20Produced%20Mechanical%20Calculator&text=Interesting%20Fact%3A%20The%20production%20debut,up%20to%20World%20War%20I.">
        Wikipedia
      </a>
    </p>
  </div>
);

export default Home;