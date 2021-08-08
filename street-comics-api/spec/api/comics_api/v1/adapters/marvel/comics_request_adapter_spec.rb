require 'rails_helper'

describe 'ComicsApi::V1::Adapters::Marvel::ComicsRequestAdapter' do

  subject { ComicsApi::V1::Adapters::Marvel::ComicsRequestAdapter }

  it 'should adapt releaseDate:asc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'releaseDate', order_by_direction: 'asc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: 'onsaleDate' })
  end

  it 'should adapt releaseDate:desc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'releaseDate', order_by_direction: 'desc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: '-onsaleDate' })
  end

  it 'should adapt title:asc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'title', order_by_direction: 'asc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: 'title' })
  end

  it 'should adapt title:desc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'title', order_by_direction: 'desc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: '-title' })
  end

  it 'should adapt "characters_ids" when present' do
    input_params = {
      offset: 0,
      limit: 1,
      order_by_field: 'title',
      order_by_direction: 'desc',
      characters_ids: '1,2,3',
    }

    output_params = subject.create(input_params)

    expect(output_params).to include({ characters: '1,2,3' })
  end
end