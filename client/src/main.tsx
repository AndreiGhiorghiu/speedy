import { Event, emit, on } from '$application/events';
import initialize from '$application/initialize';

initialize()
  .then(() => emit(Event.INITIALIZED))
  .catch((error) => emit(Event.ERROR, error));
