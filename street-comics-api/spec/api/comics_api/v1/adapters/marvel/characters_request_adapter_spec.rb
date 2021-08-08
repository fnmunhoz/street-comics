require 'rails_helper'

describe 'ComicsApi::V1::Adapters::Marvel::CharactersRequestAdapter' do

  subject { ComicsApi::V1::Adapters::Marvel::CharactersRequestAdapter }

  it 'should adapt name:asc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'name', order_by_direction: 'asc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: 'name' })
  end

  it 'should adapt name:desc' do
    input_params = { offset: 0, limit: 1, order_by_field: 'name', order_by_direction: 'desc' }

    output_params = subject.create(input_params)

    expect(output_params).to eq({ offset: 0, limit: 1, orderBy: '-name' })
  end

  it 'should adapt "name_starts_with" when present' do
    input_params = {
      offset: 0,
      limit: 1,
      order_by_field: 'name',
      order_by_direction: 'desc',
      name_starts_with: 'name'
    }

    output_params = subject.create(input_params)

    expect(output_params).to include({ nameStartsWith: 'name' })
  end
end