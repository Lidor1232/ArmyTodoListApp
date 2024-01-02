import {Source} from 'react-native-fast-image';
import {fallbackImageSource} from './Image.constans';

export function onError({
  onIsError,
  isError,
}: {
  isError: boolean;
  onIsError: (value: boolean) => void;
}) {
  !isError && onIsError(true);
}

export function onLoading({
  isLoading,
  onIsLoading,
}: {
  isLoading: boolean;
  onIsLoading: (value: boolean) => void;
}) {
  isLoading && onIsLoading(false);
}

export function onIsValidSource({source}: {source: Source | number}): boolean {
  return typeof source === 'number' || !!source?.uri;
}

export function onHandleInvalidSource({
  onIsError,
  isError,
}: {
  isError: boolean;
  onIsError: (value: boolean) => void;
}) {
  !isError && onIsError(true);
}

export function onHandleValidSource({
  isError,
  onIsError,
}: {
  isError: boolean;
  onIsError: (value: boolean) => void;
}) {
  isError && onIsError(false);
}

export function onHandleValidationSource({
  source,
  onIsError,
  isError,
}: {
  source: Source | number;
  isError: boolean;
  onIsError: (value: boolean) => void;
}) {
  if (onIsValidSource({source})) {
    onHandleValidSource({onIsError, isError});
  } else {
    onHandleInvalidSource({isError, onIsError});
  }
}

export function onGetImageSourceWithFallback({
  source,
  isError,
}: {
  source: Source | number;
  isError: boolean;
}): Source | number {
  return isError ? fallbackImageSource : source;
}
