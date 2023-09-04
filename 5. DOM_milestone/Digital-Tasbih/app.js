const subhanallah = counter();
const alhamdulillah = counter();
const allahuAkbar = counter();

function counter() {
    let count = 0;
    return {
        increment: function () {
            ++count
            return count
        },
        decrement: function () {
            --count
            return count
      },
      count: function () {
        return count;
      }
    }
}

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function incrementHandler(target) {
    const card = target.parentNode.parentNode;
    const trackCard = card.children[0].innerText;
    switch (trackCard) {
      case 'Subhanallah':
        const value = subhanallah.count() < 33 ? subhanallah.increment() : subhanallah.count();
        setInnerText('subhanallah-display', value);
        break;
        case 'Alhamdulillah':
            const v =
              alhamdulillah.count() < 33
                ? alhamdulillah.increment()
                : alhamdulillah.count();
            setInnerText('alhamdulillah-display', v);
            break;
        case 'Allahu Akbar':
            const v1 =
              allahuAkbar.count() < 34
                ? allahuAkbar.increment()
                : allahuAkbar.count();
            setInnerText('allahuAkbar-display', v1);
            break;
        
    }
}

function decrementHandler(target) {
  const card = target.parentNode.parentNode;
  const trackCard = card.children[0].innerText;
  switch (trackCard) {
    case 'Subhanallah':
      const value =
        subhanallah.count() > 0
          ? subhanallah.decrement()
          : subhanallah.count();
      setInnerText('subhanallah-display', value);
      break;
    case 'Alhamdulillah':
      const va =
        alhamdulillah.count() > 0 ? alhamdulillah.decrement() : alhamdulillah.count();
      setInnerText('alhamdulillah-display', va);
      break;
    case 'Allahu Akbar':
      const v1 =
        allahuAkbar.count() > 0 ? allahuAkbar.decrement() : allahuAkbar.count();
      setInnerText('allahuAkbar-display', v1);
      break;
  }
}

