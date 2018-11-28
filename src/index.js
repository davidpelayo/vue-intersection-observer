import 'intersection-observer';

const intersectionObserverCallback = function (entries) {
  const firstEntry = entries[0];
  if (!firstEntry.isIntersecting) {
    this.$emit('leave', [firstEntry]);
    return;
  }

  if (firstEntry.isIntersecting) {
    this.$emit('enter', [firstEntry]);
    destroyIntersectionObserver.call(this);
  }
};

const createIntersectionObserver = function () {
  const config = {
    threshold: this.threshold,
    root: this.root,
    rootMargin: this.rootMargin
  };

  this.observer = new IntersectionObserver(
    intersectionObserverCallback.bind(this),
    config
  );
};

const destroyIntersectionObserver = function () {
  this.observer && this.observer.disconnect && this.observer.disconnect();
};

const props = {
  threshold: {
    type: Array,
    required: false,
    default: () => [0]
  },
  root: {
    type: HTMLElement,
    required: false,
    default: null
  },
  rootMargin: {
    type: String,
    required: false,
    default: '100px 0px 100px 0px'
  }
};

const created = function () {
  createIntersectionObserver.call(this);
};

const mounted = function () {
  const nextTickCallback = () => {
    if (!this.$slots.default || this.$slots.default.length < 1 || this.$slots.default.length > 1) {
      console.error('[vue-intersection-observer] You should wrap at least/only one element with the <vueIntersectionObserver> component.'); // eslint-disable-line
      return;
    }

    this.$slots.default && this.$slots.default[0] && this.$slots.default[0].elm && this.observer.observe(this.$slots.default[0].elm);
  };

  this.$nextTick(nextTickCallback);
};

const destroyed = function () {
  destroyIntersectionObserver.call(this);
};

const render = function () {
  return (this.$slots && this.$slots.default && this.$slots.default[0]) || null;
};

const component = {
  abstract: true,
  props,
  created,
  mounted,
  destroyed,
  render
};

export default component; // eslint-disable-line import/no-default-export
