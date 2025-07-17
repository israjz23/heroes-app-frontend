import { use } from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  FavoriteHeroContext,
  FavoriteHeroProvider,
} from './FavoriteHeroContext';

const TestComponent = () => {
  const { favoriteCount, favorites, isFavorite, toggleFavorite } =
    use(FavoriteHeroContext);

  return (
    <div>
      <div data-testid="favorite-count">{favoriteCount}</div>

      <div data-testid="favorite-list">
        {favorites.map((hero) => (
          <div key={hero.id} data-testid={`hero-${hero.id}`}>
            {hero.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const renderContextTest = () => {
  return render(
    <FavoriteHeroProvider>
      <TestComponent />
    </FavoriteHeroProvider>
  );
};

describe('FavoriteHeroContext', () => {
  test('should initialize with default values', () => {
    renderContextTest();

    expect(screen.getByTestId('favorite-count').textContent).toBe('0');
    expect(screen.getByTestId('favorite-list').children.length).toBe(0);
  });
});
