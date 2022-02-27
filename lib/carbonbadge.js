import React, { useEffect } from 'react';

const Carbonbadge = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    const inner = `const wcID = (e) => document.getElementById(e),
      wcU = encodeURIComponent('nxtindx.com'),
      newRequest = function (e = !0) {
        fetch('https://api.websitecarbon.com/b?url=' + wcU)
          .then(function (e) {
            if (!e.ok) throw Error(e);
            return e.json();
          })
          .then(function (n) {
            e && renderResult(n),
              (n.t = new Date().getTime()),
              localStorage.setItem('wcb_' + wcU, JSON.stringify(n));
          })
          .catch(function (e) {
            (wcID('wcb_g').innerHTML = 'No Result'),
              console.log(e),
              localStorage.removeItem('wcb_' + wcU);
          });
      },
      renderResult = function (e) {
        (wcID('wcb_g').innerHTML = e.c + 'g of CO<sub>2</sub>/view');
      },
      wcC =
        '',
      wcB = wcID('wcb');
    if ('fetch' in window) {
      wcB.insertAdjacentHTML('beforeEnd', wcC),
        wcB.insertAdjacentHTML(
          'beforeEnd',
          '<div id="wcb_p" style="display: flex; flex-direction: column; gap: 8px;"><p>Carbon footprint analysis provided by <a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com" style="text-decoration: underline;">Website Carbon</a></p><p style="background-color: #f7e3bb; width: 120px; text-align:center;" class="text-center mt-1 text-label-10 p-1 font-semibold text-dark-tint" id="wcb_g">Measuring CO<sub>2</sub>&hellip;</p></div>'
        );
      let e = localStorage.getItem('wcb_' + wcU);
      const n = new Date().getTime();
      if (e) {
        const t = JSON.parse(e);
        renderResult(t), n - t.t > 864e5 && newRequest(!1);
      } else newRequest();
    }`;

    script.innerHTML = inner;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="wcb"
      className={`wcb carbonbadge${props.darkMode ? ` wcb-d` : ''}`}
    ></div>
  );
};

export default Carbonbadge;
