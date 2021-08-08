require 'rails_helper'

describe 'ComicsApi::V1::Adapters::Marvel::ComicsResponseAdapter' do

  subject { ComicsApi::V1::Adapters::Marvel::ComicsResponseAdapter }

  it 'should have no items when response is empty' do
    input_response = double(:response, body: nil)

    output_response = subject.create(input_response)

    expect(output_response.body.data.items).to eq([])
  end

  it 'should have no items when body is empty' do
    input_response = double(:response, body: {})

    output_response = subject.create(input_response)

    expect(output_response.body.data.items).to eq([])
  end

  it 'should have no items when data is empty' do
    input_response = double(:response, body: { data: {} })

    output_response = subject.create(input_response)

    expect(output_response.body.data.items).to eq([])
  end

  it 'should have no items when results is empty' do
    input_response = double(:response, body: { data: { results: [] } })

    output_response = subject.create(input_response)

    expect(output_response.body.data.items).to eq([])
  end

  it 'should have one item when there is a result' do
    item = {
      id: 1,
      title: "Comic title",
      thumbnail: { path: 'https://files.app.com/thumbnail', extension: 'jpg' }
    }
    input_response = double(:response, body: { data: { results: [item] } })

    output_response = subject.create(input_response)

    expect(output_response.body.data.items.size).to eq(1)
    item0 = output_response.body.data.items[0]
    expect(item0.id).to eq(1)
    expect(item0.title).to eq("Comic title")
    expect(item0.thumbnail).to eq("https://files.app.com/thumbnail/portrait_incredible.jpg")
  end
end