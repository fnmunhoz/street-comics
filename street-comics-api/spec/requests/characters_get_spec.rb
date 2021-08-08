require 'rails_helper'

describe "Characters GET request" do

  before do
    stub_credentials = {
      v1: {
        public_api_key: 'public_api_key',
        private_api_key: 'private_api_key',
      }
    }

    allow(Rails.application.credentials).to receive(:marvel_api).and_return(stub_credentials)
  end

  it 'accepts "marvel" as a provider' do
    stub_characters_get_with

    get '/api/v1/characters?provider=marvel'

    expect(response.status).to eq(200)
  end

  it 'accepts an offset and limit via query params' do
    stub_characters_get_with(
      {
        query_params: { "offset": "15", "limit": "30" },
      })

    get '/api/v1/characters?provider=marvel&offset=15&limit=30'

    expect(response.status).to eq(200)
  end

  it 'has a default offset and limit' do
    stub_characters_get_with(
      {
        query_params: { "offset": "0", "limit": "15" },
      })

    get '/api/v1/characters?provider=marvel'

    expect(response.status).to eq(200)
  end

  it 'accepts order_by_field and order_by_direction via query params' do
    stub_characters_get_with(
      {
        query_params: { "orderBy": "name" },
      })

    get '/api/v1/characters?provider=marvel&order_by_field=name&order_by_direction=asc'

    expect(response.status).to eq(200)
  end

  it 'has a default order_by_field and order_by_direction' do
    stub_characters_get_with(
      {
        query_params: { "orderBy": "name" },
      })

    get '/api/v1/characters?provider=marvel'

    expect(response.status).to eq(200)
  end

  it 'adapts the marvel response to the comics response when body has results' do
    item_mock = {
      id: 1,
      name: "Sample Name",
    }
    stub_characters_get_with(
      {
        body_response: { data: { results: [item_mock] } }
      })

    get '/api/v1/characters?provider=marvel'

    expected_item = {
      id: 1,
      name: "Sample Name",
    }

    expect(response.body).to eq({ data: { items: [expected_item] } }.to_json)
  end

  it 'adapts the marvel response to the comics response when body is empty' do
    stub_characters_get_with(
      {
        body_response: nil
      })

    get '/api/v1/characters?provider=marvel'

    expect(response.body).to eq({ data: { items: [] } }.to_json)
  end

  it 'only forwards permitted params to the marvel API' do
    stub_characters_get
      .with(query: hash_excluding({ "provider": "marvel", "other": "value" }))
      .to_return(status: 200)

    get '/api/v1/characters?provider=marvel&other=value'

    expect(response.status).to eq(200)
  end
end

def stub_characters_get_with(query_params: {}, status_code: 200, body_response: nil)
  stub_characters_get
    .with(
      query: hash_including(query_params),
    )
    .to_return(
      status: status_code,
      body: JSON.generate(body_response),
      headers: {}
    )
end

def stub_characters_get
  stub_request(:get, "https://gateway.marvel.com/v1/public/characters")
end