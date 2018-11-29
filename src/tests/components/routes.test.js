import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import LandingPage from '../../components/landingPage/LandingPage';
import NotFound from '../../components/notFound/NotFound';

describe('Routes component', () => {
  it('should return app component for the root path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <LandingPage />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
  });

  it('should return the NotFound component for incorrect path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/none']}>
        <NotFound />
      </MemoryRouter>,
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
