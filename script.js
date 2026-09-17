const modal = document.getElementById("modal");
const box = document.getElementById("modalContent");
const toast = document.getElementById("toast");


/* TOAST MESSAGE */

function notify(message) {

  toast.textContent = message;

  toast.style.cssText = `
    position: fixed;
    bottom: 25px;
    right: 20px;
    background: #eee;
    color: #08090d;
    padding: 13px 17px;
    border-radius: 10px;
    z-index: 50;
  `;

  setTimeout(() => {
    toast.style.cssText = "";
  }, 2500);
}


/* OPEN MODALS */

function openModal(type) {

  let html = "";


  /* IMPORT DEMO WALLET */

  if (type === "import") {

    html = `
      <h2>Import Demo Wallet</h2>

      <p>
        Use only the fictional demo code below.
        Never enter a real recovery phrase or private key.
      </p>

      <input
        id="code"
        value="DEMO-4829-TEST-2026"
        autocomplete="off"
      >

      <button
        class="submit"
        onclick="importDemo()"
      >
        Import Demo Wallet
      </button>
    `;
  }


  /* SEND */

  if (type === "send") {

    html = `
      <h2>Send — Simulation</h2>

      <p>
        SIMULATED TRANSACTION —
        NO REAL FUNDS WILL MOVE.
      </p>

      <input
        placeholder="Demo address"
        value="0xDEMO...2026"
      >

      <input
        type="number"
        value="0.25"
      >

      <button
        class="submit"
        onclick="done()"
      >
        Simulate Send
      </button>
    `;
  }


  /* RECEIVE */

  if (type === "receive") {

    html = `
      <h2>Receive — Simulation</h2>

      <p>
        Fictional receiving address.
        No blockchain connection.
      </p>

      <input
        readonly
        value="0xDEMO-RECEIVE-2026"
      >

      <button
        class="submit"
        onclick="done()"
      >
        Copy Demo Address
      </button>
    `;
  }


  /* SWAP */

  if (type === "swap") {

    html = `
      <h2>Swap — Simulation</h2>

      <p>
        SIMULATED SWAP —
        NO REAL FUNDS WILL MOVE.
      </p>

      <select>
        <option>0.10 ETH (fictional)</option>
        <option>250 USDT (fictional)</option>
      </select>

      <button
        class="submit"
        onclick="done()"
      >
        Simulate Swap
      </button>
    `;
  }


  box.innerHTML = html;

  modal.classList.add("show");
}


/* COMPLETE SIMULATION */

function done() {

  modal.classList.remove("show");

  notify(
    "Simulation completed — no real funds moved."
  );
}


/* IMPORT DEMO CODE */

function importDemo() {

  const value =
    document.getElementById("code").value;

  if (value === "DEMO-4829-TEST-2026") {

    modal.classList.remove("show");

    notify(
      "Demo wallet imported successfully."
    );

  } else {

    notify(
      "Use the provided fictional demo code."
    );
  }
}


/* ACTION BUTTONS */

document
  .querySelectorAll("[data-modal]")
  .forEach(button => {

    button.onclick = () => {

      openModal(
        button.dataset.modal
      );

    };

  });


/* CONNECT DEMO WALLET */

document.getElementById("connect").onclick =
  () => {

    notify(
      "Demo wallet connected — no real wallet used."
    );

  };


document.getElementById("connectTop").onclick =
  () => {

    notify(
      "Demo wallet connected — no real wallet used."
    );

  };


/* CLOSE MODAL */

document.getElementById("close").onclick =
  () => {

    modal.classList.remove("show");

  };


/* CLOSE WHEN CLICKING OUTSIDE */

modal.onclick = event => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

};